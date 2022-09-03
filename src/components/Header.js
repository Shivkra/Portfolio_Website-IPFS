// Import Assets
import profile from '../assets/profile.jpg';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Siva Sankar" />

            <div className='header__content'>
                <h1>Hi, I'm Siva Sankar</h1>
                <p>Blockchain Developer</p>
                <a href='mailto:sivasankarkk143@gmail.com' className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;