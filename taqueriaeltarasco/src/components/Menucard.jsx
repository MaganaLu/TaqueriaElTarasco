
import './Menucard.css';
const Menucard = (props) => {
    let price = (Number(props.price)).toFixed(2);
    return (
        <>
            <div class="main">
                <ul class="cards">
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src={props.image} alt={props.imageAlt}/></div>
                            <div class="card_content">
                                <h2 class="card_title">{props.itemName} &#x2022; ${price}</h2>
                                <div class="card_text">
                                    <p>{props.Description}</p>
                                </div>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </>
    )
};

export default Menucard;