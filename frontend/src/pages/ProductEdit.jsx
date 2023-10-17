import { useState, useEffect } from 'react'
// import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { listProductDetails, updateProduct } from '../actions/productActions'
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'
import PageNav from '../components/PageNav'


function ProductEdit() {

    const {productId} = useParams()
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [discount, setDiscount] = useState(false)
    const [percentage, setPercentage] = useState(null)
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [discountedPrice, setDiscountedPrice] = useState(null)
    // const [uploading, setUploading] = useState(false)



    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { error, loading, product } = productDetails

    

    const productUpdate = useSelector(state => state.productUpdate)
    const { error: errorUpdate, loading: loadingUpdate, success: successUpdate } = productUpdate


    useEffect(() => {

        if (successUpdate) {
            dispatch({ type: PRODUCT_UPDATE_RESET })
            navigate('/admin/productlist')
        } else {
            console.log(product)
            if (!product || product._id !== Number(productId)) {
                dispatch(listProductDetails(productId))
            } else {

                setName(product.name)
                setPrice(product.price)
                setImage(product.image)
                setCategory(product.category)
                setDiscount(product.discount)
                setPercentage(product.percentage)
                setStartDate(product.startDate)
                setEndDate(product.endDate)
                setDiscountedPrice(product.discounted_price)
                setDescription(product.description)

            }
        }



    }, [dispatch, product, productId, successUpdate, navigate])


    useEffect(() => {
        if (price && percentage) {
            const parsedPrice = parseFloat(price);
            const parsedPercentage = parseFloat(percentage);
            const calculatedDiscountedPrice = (parsedPrice * (100 - parsedPercentage)) / 100;
            setDiscountedPrice(calculatedDiscountedPrice);
        } else {
            setDiscountedPrice(null);
        }
    }, [price, percentage]);

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateProduct({
            _id: productId,
            name,
            price,
            image,
            category,
            description,
            discount,
            percentage,
            discountedPrice,
            startDate,
            endDate,
        }))
    }

    // const uploadFileHandler = async (e) => {
    //     const file = e.target.files[0]
    //     const formData = new FormData()

    //     formData.append('image', file)
    //     formData.append('product_id', productId)

    //     setUploading(true)

    //     try {
    //         const config = {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data'
    //             }
    //         }

    //         const { data } = await axios.post('/api/products/upload/', formData, config)


    //         setImage(data)
    //         setUploading(false)

    //     } catch (error) {
    //         setUploading(false)
    //     }
    // }

    return (
        <div style={{color:"black"}} >
            <PageNav/>
            <Link to='/admin/productlist'>
                Go Back
            </Link>

            <FormContainer>
                <h1>Edit Product</h1>
                {loadingUpdate && <Loader />}
                {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}

                {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> 
                     :(
                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId='name'>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type='name'
                                        placeholder='Enter name'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group controlId='price'>
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control
                                        type='number'
                                        placeholder='Enter price'
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                </Form.Group>

                                {/* <Form.Group controlId='image'>
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control
                                        type='text'
                                        placeholder='Enter image'
                                        value={image}
                                        onChange={(e) => setImage(e.target.value)}
                                    />
                                    <Form.File
                                        id='image-file'
                                        label='Choose File'
                                        custom
                                        onChange={uploadFileHandler}
                                    />
                                    {uploading && <Loader />}
                                </Form.Group> */}

                                <Form.Group controlId='category'>
                                    <Form.Label>Category</Form.Label>
                                    <Form.Control
                                        type='text'
                                        placeholder='Enter category'
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group controlId='description'>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        type='text'
                                        placeholder='Enter description'
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group controlId='discount'>
                                    <Form.Check
                                        type='checkbox'
                                        label='Discount'
                                        checked={discount}
                                        onChange={(e) => setDiscount(e.target.checked)}
                                    />
                                </Form.Group>

                                {discount && (
                                    <>
                                        <Form.Group controlId='percentage'>
                                            <Form.Label>Discount Percentage</Form.Label>
                                            <Form.Control
                                                type='number'
                                                placeholder='Enter percentage'
                                                value={percentage}
                                                onChange={(e) => setPercentage(e.target.value)}
                                            />
                                        </Form.Group>

                                        <Form.Group controlId='startDate'>
                                            <Form.Label>Start Date</Form.Label>
                                            <Form.Control
                                                type='date'
                                                value={startDate}
                                                onChange={(e) => setStartDate(e.target.value)}
                                            />
                                        </Form.Group>

                                        <Form.Group controlId='endDate'>
                                            <Form.Label>End Date</Form.Label>
                                            <Form.Control
                                                type='date'
                                                value={endDate}
                                                onChange={(e) => setEndDate(e.target.value)}
                                            />
                                        </Form.Group>

                                        <Form.Group controlId='discountedPrice'>
                                            <Form.Label>Discounted Price</Form.Label>
                                            <Form.Control
                                                type='number'
                                                placeholder='Enter discounted price'
                                                value={discountedPrice}
                                                onChange={(e) => setDiscountedPrice(e.target.value)}
                                            />
                                        </Form.Group>
                                    </>
                                )}



                            <Button type='submit' variant='primary'>
                                Update
                            </Button>

                        </Form>
                    ) }

            </FormContainer >
        </div>

    )
}

export default ProductEdit