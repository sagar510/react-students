import './App.css';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ()=> {
    return (
      <nav class="diff_nav">
        <Link class="eachlink" to="/">Home</Link>
        <Link class="eachlink" to="/About">About</Link>
        <Link class="eachlink" to="/Contact">Contact</Link>
        <Link class="eachlink" to="/AddStudent">AddStudent</Link>
        <Link class="eachlink" to="/AllStudents">AllStudents</Link>
        <Link class="eachlink" to="/AllTeachers">AllTeachers</Link>
      </nav>
  
    );
}

export default NavBar;