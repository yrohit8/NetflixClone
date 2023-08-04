import React, { useEffect, useState } from 'react'
import "./Home.scss"  
import axios from 'axios'
import { Link } from 'react-router-dom';
import { BiPlay } from 'react-icons/bi';
import {AiOutlinePlus } from 'react-icons/ai';

const apiKey = "95e714ef33bb613c81642fac1e0ff0a4"
const url = "https://api.themoviedb.org/3/"
const imgUrl = "https://image.tmdb.org/t/p/original"
const upcoming = "movie/upcoming"
const nowPlaying = "movie/now_playing"
const popular = "movie/popular"
const topRated = "movie/top_rated"
// const genre = "genre/movie/list"


const Card =({img})=>(
    <img className='card' src={img} alt="cover" />
)


const Row = ({title,
  arr=[]
  })=>(
  <div className='row'>
    <h2>{title}</h2>
    <div>
      {
        arr.map((item,index)=>(
          <Card key= {index} img={`${imgUrl}/${item.poster_path}`}/>
        ))
      }
    </div>
    
  </div>
)


const Home = () => {
  const [upcomingMovies, setUpComingMovies] = useState([])
  const [nowPlayingMovies, setnowplayingMovies] = useState([])
  const [popularMovies, setpopularMovies] = useState([])
  const [topRatedMovies, settopRatedMovies] = useState([])
  const [genreMovies, setgenreMovies] = useState([])
useEffect(()=>{
    const fetchUpcomingMovies = async()=>{
      const {data:{results}} = await axios.get(`${url}/${upcoming}?api_key=${apiKey}`)
      setUpComingMovies(results)
    }
    fetchUpcomingMovies()

   

    const fetchnowplayingMovies = async()=>{
      const {data:{results}} = await axios.get(`${url}/${nowPlaying}?api_key=${apiKey}`)
      setnowplayingMovies(results)
    }
    fetchnowplayingMovies()

    

    const fetchpopular= async()=>{
      const {data:{results}} = await axios.get(`${url}/${popular}?api_key=${apiKey}`)
      setpopularMovies(results)
    }
    fetchpopular()

    

    const fetchtopRatedMovies = async()=>{
      const {data:{results}} = await axios.get(`${url}/${topRated}?api_key=${apiKey}`)
      settopRatedMovies(results)
    }
    fetchtopRatedMovies()


 
 
  const fetchgenreMovies = async()=>{
    const {data:{genres}} = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`)
    setgenreMovies(genres)
  }
  fetchgenreMovies()
},[])
  return (
    <section className='home'>
      <div className='banner' style={{
        backgroundImage: upcomingMovies[6] ? `url(${`${imgUrl}/${upcomingMovies[6].poster_path}`})`:"rgb(16,16,16);"
      }}>
        {upcomingMovies[6] &&
        (<h1>{upcomingMovies[6].original_title}</h1>)
        }
        
        {upcomingMovies[6] &&
        (<p>{upcomingMovies[6].overview}</p>)
        }
        <div>
          <button><BiPlay />Play</button>
        <button><AiOutlinePlus />My List</button>
        </div>
        
        
      </div>
      <Row title={"Upcoming Movies"} arr={upcomingMovies} />
      <Row title={"Now Playing"} arr={nowPlayingMovies} />
      <Row title={"Popular"} arr={popularMovies} />
      <Row title={"Top Rated"} arr={topRatedMovies} /> 

      <div className="genreBox">
        {genreMovies.map((item) => (
          <Link key = {item.id} to={`/genre/${item.id}`}>{item.name}</Link>
        ))}
      </div>
    </section>
  )
}

export default Home

// Upcoming Movies url::
// "https://api.themoviedb.org/3/movie/upcoming?api_key=95e714ef33bb613c81642fac1e0ff0a4&language=en-US&page=1"