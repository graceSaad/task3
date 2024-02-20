import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import { Row, Col, Form, InputGroup } from 'react-bootstrap';
import { IoIosSearch } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";

const Home = () => {

    const KEY = '';

    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('homs')

    
    const [dates, setDates] = useState([]);

    useEffect(() => {
        const currentDate = new Date();
        const newDates = [];
        for (let i = 0; i < 5; i++) {
            const nextDate = new Date(currentDate);
            nextDate.setDate(currentDate.getDate() + i);
            newDates.push(nextDate.toDateString());
        }

        setDates(newDates);
    }, []);


    const fetchData = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${KEY}`
            );
            setWeatherData(response.data);
            console.log(response.data); 
            
        } catch (error) {
            console.error(error);
        }
    };
    
    useEffect(() => {
        fetchData();
    }, [city]);

    if (!weatherData) {
        return <Spinner animation="grow" variant="info"/>;
    }

    return (
        <div className='back'>
            <p className='title'><HiLocationMarker/> Location: {weatherData.city.name} - {weatherData.city.country}  </p> 
            <InputGroup className="ms-3 mb-2 w-50">
                <InputGroup.Text id="basic-addon1"><IoIosSearch/></InputGroup.Text>
                <Form.Control
                placeholder="Search for city"
                aria-label="Search for city"
                aria-describedby="basic-addon1"
                name='city'
                value={city}
                onChange={e => setCity(e.target.value)}
                />
            </InputGroup>
            <Row>
                <Col className='my-4'>
                    <div className='day'>
                        <p>Today: {dates[0]}</p>
                        <img src={`http://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}.png`} className='img'/>
                        <p>Description: {weatherData.list[0].weather[0].description}</p>
                        <p>Temp: {weatherData.list[0].main.temp}°C</p>
                        <p>Feels like: {weatherData.list[0].main.feels_like}°C</p>
                        <p>Humidity: {weatherData.list[0].main.humidity}%</p>
                        <p>Pressure: {weatherData.list[0].main.pressure}</p>
                        <p>Wind Speed: {weatherData.list[0].wind.speed}m/s</p>
                        <p>Max Temp: {weatherData.list[0].main.temp_max}°C</p>
                        <p>Min Temp: {weatherData.list[0].main.temp_min}°C</p>
                    </div>
                </Col>

                <Col className='my-4'>
                    <div className='day'>
                        <p>{dates[1]}:</p>
                        <img src={`http://openweathermap.org/img/wn/${weatherData.list[4].weather[0].icon}.png`} className='img'/>
                        <p>Description: {weatherData.list[4].weather[0].description}</p>
                        <p>Temp: {weatherData.list[4].main.temp}°C</p>
                        <p>Feels like: {weatherData.list[4].main.feels_like}°C</p>
                        <p>Humidity: {weatherData.list[4].main.humidity}%</p>
                        <p>Pressure: {weatherData.list[4].main.pressure}</p>
                        <p>Wind Speed: {weatherData.list[4].wind.speed}m/s</p>
                        <p>Max Temp: {weatherData.list[4].main.temp_max}°C</p>
                        <p>Min Temp: {weatherData.list[4].main.temp_min}°C</p>
                    </div>
                </Col>

                <Col className='my-4'>
                    <div className='day'>
                        <p>{dates[2]}:</p>
                        <img src={`http://openweathermap.org/img/wn/${weatherData.list[12].weather[0].icon}.png`} className='img'/>
                        <p>Description: {weatherData.list[12].weather[0].description}</p>
                        <p>Temp: {weatherData.list[12].main.temp}°C</p>
                        <p>Feels like: {weatherData.list[12].main.feels_like}°C</p>
                        <p>Humidity: {weatherData.list[12].main.humidity}%</p>
                        <p>Pressure: {weatherData.list[12].main.pressure}</p>
                        <p>Wind Speed: {weatherData.list[12].wind.speed}m/s</p>
                        <p>Max Temp: {weatherData.list[12].main.temp_max}°C</p>
                        <p>Min Temp: {weatherData.list[12].main.temp_min}°C</p>
                    </div>
                </Col>

                <Col className='my-4'>
                    <div className='day'>
                        <p>{dates[3]}:</p>
                        <img src={`http://openweathermap.org/img/wn/${weatherData.list[20].weather[0].icon}.png`} className='img'/>
                        <p>Description: {weatherData.list[20].weather[0].description}</p>
                        <p>Temp: {weatherData.list[20].main.temp}°C</p>
                        <p>Feels like: {weatherData.list[20].main.feels_like}°C</p>
                        <p>Humidity: {weatherData.list[20].main.humidity}%</p>
                        <p>Pressure: {weatherData.list[20].main.pressure}</p>
                        <p>Wind Speed: {weatherData.list[20].wind.speed}m/s</p>
                        <p>Max Temp: {weatherData.list[20].main.temp_max}°C</p>
                        <p>Min Temp: {weatherData.list[20].main.temp_min}°C</p>
                    </div>
                </Col>

                <Col className='my-4'>
                    <div className='day'>
                        <p>{dates[4]}:</p>
                        <img src={`http://openweathermap.org/img/wn/${weatherData.list[28].weather[0].icon}.png`} className='img'/>
                        <p>Description: {weatherData.list[28].weather[0].description}</p>
                        <p>Temp: {weatherData.list[28].main.temp}°C</p>
                        <p>Feels like: {weatherData.list[28].main.feels_like}°C</p>
                        <p>Humidity: {weatherData.list[28].main.humidity}%</p>
                        <p>Pressure: {weatherData.list[28].main.pressure}</p>
                        <p>Wind Speed: {weatherData.list[28].wind.speed}m/s</p>
                        <p>Max Temp: {weatherData.list[28].main.temp_max}°C</p>
                        <p>Min Temp: {weatherData.list[28].main.temp_min}°C</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Home