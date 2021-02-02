import Section from "./Section";
import datas from "./movies_vze0mn.json";

const Sections = () => {
    return (
        <div>
            {datas.map((section, indice) => {
                return (
                    <div>
                        <Section
                            key={section.category}
                            section={section}
                        ></Section>
                    </div>
                );
            })}
        </div>
    );
};

export default Sections;
