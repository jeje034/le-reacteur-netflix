const Section = (props) => {
    return (
        <section>
            <h2 className="section-h2">{props.section.category}</h2>
            <div className="div-before-div-before-image">
                {props.section.images.map((image, indice) => {
                    return (
                        <div key={indice} className="div-before-image">
                            <img src={image} alt={image} />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Section;
