import React from "react";
import { CardBody, Button } from "reactstrap";


const CardComponent = () => {
    return <div className="container">
        <div className="row">
            <div className="col-12 col-md-4 text-center">
                <CardBody>
                    <img src="https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg" alt="" width={"200px"} className="rounded-circle" />
                    <h3>
                        Category
                    </h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                    <Button>
                        View details
                    </Button>
                </CardBody>
            </div>
            <div className="col-12 col-md-4 text-center">
                <CardBody>
                    <img src="https://contents.mediadecathlon.com/p1484240/k$ab565f3675dbdd7e3c486175e2c16583/men-s-travel-100-trekking-shirt-burgundy.jpg" alt="" width={"200px"} className="rounded-circle" />
                    <h3>
                        Category
                    </h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                    <Button>
                        View details
                    </Button>
                </CardBody>
            </div>
            <div className="col-12 col-md-4 text-center">
                <CardBody>
                    <img src="https://www.lafuma.com/media/catalog/product/cache/18/image/9df78eab33525d08d6e5fb8d27136e95/l/f/lfv11349-2768-pantalon-femme-access-pants-w-beige_1.jpg" alt="" width={"200px"} className="rounded-circle" />
                    <h3>
                        Category
                    </h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                    <Button>
                        View details
                    </Button>
                </CardBody>
            </div>
        </div>

    </div>
}

export default CardComponent;