// Import Assets
import Gif from '../assets/GIF_Portal-Solana.png';
import Nft from '../assets/NFT_Marketplace.png';
import Todo from '../assets/ToDoList.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>GIF Portal</h3>
                    <img src={Gif} alt="Uniswap Swap Page" />
                    <p>
                        The place where you can store your favourite GIFs on to the Solana blockchain and
                        see all your GIFs by just connecting your Metamask wallet.
                    </p>

                    <a href="https://gif-portal-starter-project.sivasankarkk.repl.co/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/sivasankarkk/GIF_Portal-Solana" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>NFT_Marketplace</h3>
                    <img src={Nft} alt="Compound Landing Page" />
                    <p>
                        The place where sellers, buyers and creators from different parts of the world 
                        come together to sell and buy huge range of NFTs.

                    </p>

                    <a href="https://calm-silence-7769.on.fleek.co/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/sivasankarkk/React_js-NFT-showcase" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>ToDOList</h3>
                    <img src={Todo} alt="Aave Landing Page" />
                    <p>
                    List everything that you have to do, with the most important tasks at the top of the list,
                    and the least important tasks at the bottom with ease.
                    </p>

                    <a href="https://murmuring-river-14890.herokuapp.com/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/sivasankarkk/ToDoList-React" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;