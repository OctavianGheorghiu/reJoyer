import React, { useEffect, useReducer, useRef, useState } from 'react'
import GaugeComponent from 'react-gauge-component'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import Cookies from 'js-cookie'
import { getUser, updateAccount, updateContactPhotograph } from '../api/ContactService';
import { getProductsByOwnerId, updateProductPhotograph, createProduct, updateDescription } from '../api/ProductService';
import { analyzeSentiment } from '../api/SentimentService';

import { counties, categories } from '../variables/constants';

import './account.css'
import ProductList from '../components/ProductList'

const fallbackPhoto = 'https://via.placeholder.com/150'

const Account = (props) => {

    const inputRef = useRef();
    const history = useHistory();
    const [data, setData] = useState({});
    const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');

    const [menu, setMenu] = useState('getProducts');
    const [showPhoto, setShowPhoto] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    const [showSentiment, setShowSentiment] = useState(false);

    const [productId, setProductId] = useState('');
    const [productPhotoUrl, setProductPhotoUrl] = useState('');
    const [productTitle, setProductTitle] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productCategory, setProductCategory] = useState(categories[0]);
    const [productCity, setProductCity] = useState(counties[0]);
    const [productPrice, setProductPrice] = useState('');

    const [overallSentiment, setOverallSentiment] = useState(0);
    const [lowestSentimentScore, setLowestSentimentScore] = useState(0);
    const [lowestSentimentSentence, setLowestSentimentSentence] = useState('');

    const [formDataState, setFormDataState] = useState(null);
    const [photoFile, setPhotoFile] = useState(null);

    // useEffect to load user data when the component mounts
    useEffect(async () => {
        const userId = Cookies.get('userId');  // Fetch the user ID from cookies
        console.log("the current id is", userId);
        if (userId) {
            getUser(userId).then(data => {
                console.log("the data received from the server:", data);
                console.log("the data i want to input in person:", data.data);
                setId(data.data.id);  // Set the person data retrieved from getUser
                setName(data.data.name);
                setEmail(data.data.email);
                setPhone(data.data.phone);
                setAddress(data.data.address);
                setPhotoUrl(data.data.photoUrl);
                getProducts(0, 10, data.data.id);

                setMenu('getProducts');
                setShowPhoto(false);
                setShowDescription(false);
                setShowSentiment(false);

                setProductId('');
                setProductPhotoUrl('');
                setProductTitle('');
                setProductDescription('');
                setProductCategory(categories[0]);
                setProductCity(counties[0]);
                setProductPrice('');


            }).catch(error => {
                console.error('Failed to fetch user data:', error);
            });
        }
    }, [reducerValue]);

    const updateContactPhoto = async (file) => {
        try {
            console.log("updateContactPhoto");
            const formData = new FormData();
            formData.append('file', file, file.name);
            formData.append('id', id);
            await updateContactImage(formData);
        } catch (error) {
            console.log(error);
        }
    };

    const updateContactImage = async (formData) => {
        try {
            console.log("updateContactImage");
            const { data: photoUrl } = await updateContactPhotograph(formData);
            const updatedPhotoUrl = `${photoUrl}?${new Date().getTime()}`;
            console.log(updatedPhotoUrl);
            setPhotoUrl(updatedPhotoUrl)
        } catch (error) {
            console.log(error);
        }
    };

    const updateListingPhoto = async (file) => {
        try {
            console.log("updateListingPhoto");
            const formData = new FormData();
            formData.append('file', file, file.name);
            formData.append('id', productId);
            await updateListingImage(formData);
        } catch (error) {
            console.log(error);
        }
    };

    const updateListingImage = async (formData) => {
        try {
            console.log("updateListingImage");
            const { data: photoUrl } = await updateProductPhotograph(formData);
            const updatedPhotoUrl = `${photoUrl}?${new Date().getTime()}`;
            console.log(updatedPhotoUrl);
            setProductPhotoUrl(updatedPhotoUrl)
            setShowDescription(true);
        } catch (error) {
            console.log(error);
        }
    };

    const getProducts = async (page = 0, size = 10, id) => {
        try {
            const pageRequest = {
                "page": page,
                "size": size
            };
            console.log("the person.id: ", id);
            const response = await getProductsByOwnerId(id, pageRequest);
            // console.log("the person:", person);
            if (response && response.data) {
                setData(response.data);
            } else {
                setData({ content: [] }); // Empty structure if no data
            }
            console.log(data);
        } catch (error) {
            console.log(error);
            setData({ content: [] });
        }
    };

    const updatePerson = () => {
        const person = {
            "id": id,
            "name": name,
            "email": email,
            "phone": phone,
            "address": address,
            "photoUrl": photoUrl
        }
        updateAccount(person);
    }

    // const createListing = async () => {
    //     // console.log("create listing")
    //     const product = {
    //         // "photoUrl":productPhotoUrl,
    //         "title": productTitle,
    //         "city": productCity,
    //         "category": productCategory,
    //         "price": productPrice,
    //         "description": productDescription,
    //         "ownerId": id
    //     }

    //     //console.log(product)
    //      const result = await createProduct(product);
    //      console.log(result);
    //     // console.log("the product id is:",result.data.id);
    //     const res = await setProductId(result.data.id);
    //     console.log("the product id is:", result.data.id);
    //     console.log(photoFile);
    //     const formData = new FormData();
    //     formData.append('file', photoFile, photoFile.name);
    //     formData.append('id', result.data.id);
    //     // setFormDataState(formData2);
    //     await updateListingImage(formData);

    //     // updateListingImage(formDataState);
    // };

    const createListing = async () => {
        if (!productTitle || !productPrice) {
            console.log("Required fields are missing");
            return;
        }

        const product = {
            title: productTitle,
            city: productCity,
            category: productCategory,
            price: productPrice,
            description: productDescription,
            ownerId: id
        };

        try {
            const result = await createProduct(product);
            const newProductId = result.data.id;
            setProductId(newProductId);
            console.log("Product created with ID:", newProductId);
            setShowPhoto(true);
            // if (photoFile) {
            //     const formData2 = new FormData();
            //     formData2.append('file', photoFile, photoFile.name);
            //     formData2.append('id', newProductId);
            //     await updateListingImage(formData2, newProductId);
            // }
        } catch (error) {
            console.error("Failed to create product:", error);
        }
    };

    const finalize = async () => {

        const newDescription = { "description": productDescription };
        updateDescription(productId, newDescription);
        forceUpdate();
    };

    const analyze = async () => {
        const text = { "text": productDescription };
        const response = await analyzeSentiment(text);
        
        console.log(response.data);
        //console.log(response.data.overallSentiment*100);
        
        setOverallSentiment(transformSentiment(response.data.overallSentiment));
        setLowestSentimentSentence(response.data.lowestSentimentSentence);
        setLowestSentimentScore(transformSentiment(response.data.lowestSentimentScore));
        setShowSentiment(true);
    }

    const transformSentiment = (value) => {
        if (value >= -1 && value < 0) {
            // Map from [-1, 0) to [0, 20)
            return (value + 1) * 20;
        } else if (value >= 0 && value < 0.2) {
            // Map from [0, 0.2) to [20, 50)
            return 20 + ((value - 0) / 0.2) * 30;
        } else if (value >= 0.2 && value <= 1) {
            // Map from [0.2, 1] to [50, 100]
            return 50 + ((value - 0.2) / 0.8) * 50;
        } else {
            // Return NaN if the value is out of the expected range
            return NaN;
        }
    }

    return (
        <>
            <Navbar></Navbar>
            <div id='main' className="category-page-main">
                <div className='separator'></div>
                <div className='user-info'>
                
                    <div className='container-photo'>
                        <div id='profile-photo' className="form-group">
                            <img src={photoUrl} alt="Profile" className="profile-photo" />
                        </div>
                        {/* <button className='update-photo' type='button' onClick={updatePhoto}>Update Photo</button> */}
                        <input type='file' className='update-photo' ref={inputRef} onChange={(event) => updateContactPhoto(event.target.files[0])} name='file' accept='image/*' />
                    </div>
                    <div className="container">
                        <h1 className="title">Edit Your Profile</h1>
                        <div className="formular">
                            <div className="form-group">
                                <label className="form-label">Name:</label>
                                <input type="text" className="form-input" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email:</label>
                                <input type="email" className="form-input" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Phone:</label>
                                <input type="tel" className="form-input" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Address:</label>
                                <select
                                    className="form-input"
                                    value={address} onChange={(e) => setAddress(e.target.value)}
                                >
                                    {counties.map((county) => (
                                        <option key={county} value={county}>{county}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <button type='button' id='btn-save-changes' className='button' onClick={() => { updatePerson() }}>Save changes</button>
                    </div>

                </div>

                <div className='buttons'>
                    <button type='button' className='button' onClick={() => { setMenu('getProducts') }}>Your Products</button>
                    <button type='button' className='button' onClick={() => { setMenu('createListing') }}>Create Listing</button>
                    <button type='button' className='button' id='sign-out' onClick={() => {
                        Cookies.remove('userId');
                        history.push('/');
                    }}>Sing Out</button>
                </div>
                <div className='separator'></div>
                {menu === 'getProducts' ? (
                    <ProductList data={data} />
                ) : (
                    <div className='create-listing'>
                        <div className="formular">

                            <div className="product-form-group">
                                <label className="product-form-label">Title:</label>
                                <input type="text" className="product-form-input" name="title" value={productTitle} onChange={(e) => setProductTitle(e.target.value)} />
                            </div>
                            <div className="product-form-group">
                                <label className="product-form-label">City:</label>
                                <select
                                    className="product-form-input"
                                    value={productCity} onChange={(e) => setProductCity(e.target.value)}
                                >
                                    {counties.map((county) => (
                                        <option key={county} value={county}>{county}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="produc-form-group">
                                <label className="product-form-label">Category:</label>
                                <select
                                    className="product-form-input"
                                    value={productCategory} onChange={(e) => setProductCategory(e.target.value)}
                                >
                                    {categories.map((category) => (
                                        <option key={category} value={category}>{category}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="product-form-group">
                                <label className="product-form-label">Price:</label>
                                <input type="tel" className="product-form-input" name="price" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
                            </div>
                            <button type='button' onClick={() => { createListing() }}>Create Listing</button>
                            {showPhoto == true ? (
                                <>
                                    <div className='product-container-photo'>
                                        <div className="product-form-group">
                                            <img src={productPhotoUrl || fallbackPhoto} alt="Profile" className="profile-photo" />
                                        </div>
                                        <input type='file' className='product-update-photo' onChange={(event) => updateListingPhoto(event.target.files[0])} name='file' accept='image/*' />
                                    </div>
                                </>
                            ) : (
                                <></>
                            )}
                            {showDescription == true ? (
                                <>
                                    <div className="product-form-group">
                                        <label className="product-form-label">Product Description:</label>
                                        <input type="text" className="product-form-description" name="description" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} />
                                    </div>
                                    {showSentiment == true ? (
                                        <>
                                        <p>{overallSentiment}</p>
                                            <GaugeComponent
                                                type="semicircle"
                                                arc={{
                                                    colorArray: ['#FF2121', '#00FF15'],
                                                    padding: 0.02,
                                                    subArcs:
                                                        [
                                                            { length: 20 },
                                                            { length: 30 },
                                                            { length: 50 }
                                                        ]
                                                }}
                                                pointer={{ type: "arrow", animationDelay: 0, color: "lightblue" }}
                                                labels={{
                                                    valueLabel: {
                                                        formatTextValue: value => {
                                                            if (value > 40) {
                                                                return 'Positive';
                                                            } else if (value >= 10) {
                                                                return 'neutru';
                                                            } else {
                                                                return 'negativ';
                                                            }
                                                        }
                                                    },
                                                    tickLabels: { hideMinMax: true }
                                                }}
                                                value={overallSentiment}
                                                minValue={0}
                                                maxValue={100}
                                            />
                                            <p>The lowest sentiment score of a sentence is: {lowestSentimentScore}</p>
                                            <p>The sentence: {lowestSentimentSentence}</p>
                                        </>
                                    ) : (
                                        <>
                                        </>
                                    )}
                                    <div className='final-buttons'>
                                        <button type='button' onClick={() => { analyze(productDescription) }}>Analyze</button>
                                        <button type='button' onClick={() => { finalize() }}>Post Listing</button>
                                    </div>
                                </>
                            ) : (
                                <></>
                            )}


                        </div>
                    </div>
                )}
            </div>
            <Footer></Footer>
        </>
    )
}

export default Account
