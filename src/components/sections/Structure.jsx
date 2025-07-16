import Button from "../interactives/Button";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";
import SectionShapeDiv from "../sectionElements/SectionShapeDiv";
import { FaWhatsapp } from "react-icons/fa";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

export default function Structure() {
  return (
    <div>
      <SectionArea className="squares" paddingbot={false}>
        <SectionWrapper>
          <SectionHeader
            className="text-center"
            miniTitle="DICAS E CURIOSIDADES"
            sectionHeaderTitle="Entenda seus direitos de forma simples"
            sectionHeaderSubtitle="Assista vídeos curtos com explicações diretas, curiosidades do mundo jurídico e orientações práticas para o seu dia a dia."
            titleColorSet="text-black"
            subtitleColorSet="text-black"
          />
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/oikcx5ahRCE"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="rounded-md desktop1:max-w-[50%]"
          ></iframe>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}
