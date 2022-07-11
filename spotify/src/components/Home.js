import React from 'react'
import './Home.css'
function Home(props) {
  return (
    <div className='parentClass'>
        <h1>Top 10 Songs</h1>
        <table border="10">
            <tr className='firTab'>
                <td>Artwork</td>
                <td>Song</td>
                <td>Date of release</td>
                <td>Artists</td>
                <td>Rate</td>
            </tr>
            <tr>
                <td>
                    <ul>
                        {props.list.map(
                            (song) => (
                            <li className='l1'>
                                <img src={song.image} />
                            </li>)
                        )}
                    </ul>
                </td>
                <td>
                    <ul>
                        {
                        props.list.map(
                            (song) => (
                            <h3>{song.title}</h3>)
                        )}
                    </ul>
                </td>
                <td>
                    <ul>
                        {
                        props.list.map(
                            (song) => (
                            <h3>{song.DOB}</h3>)
                        )}
                    </ul>
                </td>
                <td>
                    <ul>
                        {
                        props.list.map(
                            (song) => (
                            <h3>{song.NameOfSinger}</h3>)
                        )}
                    </ul>
                </td>
                <td>
                    <ul>
                        {
                        props.list.map(
                            (song) => (
                            <h3>{song.Rate}</h3>)
                        )}
                    </ul>
                </td>
                
            </tr>
            

        </table>
    </div>
  )
}

export default Home;