import content from "../../content/content";
import IconFeatureCard from "../cards/IconFeatureCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import ServicesModal from "./ServicesModal";

export default function FeaturesWithIcons({ colorMode }) {
  // Define background and text colors based on colorMode
  const bgClasses = {
    dark: "bg-bgSectionOpacityDark",
    light: "bg-bgSectionOpacityLight",
    default: "squares",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "text-black",
  };

  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const textClass = textClasses[colorMode] || textClasses.default;

  return (
    <SectionArea id="service" className={`${bgClass} `} paddingbot={true}>
      <SectionHeader
        className={`text-center ${textClass}`}
        miniTitle={content.texts.features.miniTag}
        sectionHeaderTitle={content.texts.features.title}
        sectionHeaderSubtitle={content.texts.features.subtitle}
        titleColorSet={textClass}
        subtitleColorSet={textClass}
      />
      <SectionWrapper>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <MotionDivDownToUp>
            <IconFeatureCard
              icon={content.texts.features.card1.icon}
              title={content.texts.features.card1.title}
              paragraph={content.texts.features.card1.subtitle}
              className="m-auto"
              colorMode={colorMode}
            />
          </MotionDivDownToUp>

          <MotionDivDownToUp>
            <IconFeatureCard
              icon={content.texts.features.card2.icon}
              title={content.texts.features.card2.title}
              paragraph={content.texts.features.card2.subtitle}
              className="m-auto"
              colorMode={colorMode}
            />
          </MotionDivDownToUp>

          <MotionDivDownToUp>
            <IconFeatureCard
              icon={content.texts.features.card3.icon}
              title={content.texts.features.card3.title}
              paragraph={content.texts.features.card3.subtitle}
              className="m-auto"
              colorMode={colorMode}
            />
          </MotionDivDownToUp>

          <MotionDivDownToUp>
            <IconFeatureCard
              icon={content.texts.features.card4.icon}
              title={content.texts.features.card4.title}
              paragraph={content.texts.features.card4.subtitle}
              className="m-auto"
              colorMode={colorMode}
            />
          </MotionDivDownToUp>

          <MotionDivDownToUp>
            <IconFeatureCard
              icon={content.texts.features.card5.icon}
              title={content.texts.features.card5.title}
              paragraph={content.texts.features.card5.subtitle}
              className="m-auto"
              colorMode={colorMode}
            />
          </MotionDivDownToUp>

          <MotionDivDownToUp>
            <IconFeatureCard
              icon={content.texts.features.card6.icon}
              title={content.texts.features.card6.title}
              paragraph={content.texts.features.card6.subtitle}
              className="m-auto"
              colorMode={colorMode}
            />
          </MotionDivDownToUp>

          <MotionDivDownToUp>
            <IconFeatureCard
              icon={content.texts.features.card7.icon}
              title={content.texts.features.card7.title}
              paragraph={content.texts.features.card7.subtitle}
              className="m-auto"
              colorMode={colorMode}
            />
          </MotionDivDownToUp>

          <MotionDivDownToUp>
            <IconFeatureCard
              icon={content.texts.features.card8.icon}
              title={content.texts.features.card8.title}
              paragraph={content.texts.features.card8.subtitle}
            >
              <ServicesModal />
            </IconFeatureCard>
          </MotionDivDownToUp>

          {/* <MotionDivDownToUp>
            <IconFeatureCard
              icon={content.texts.features.card9.icon}
              title={content.texts.features.card9.title}
              paragraph={content.texts.features.card9.subtitle}
              className="m-auto"
              colorMode={colorMode}
            />
          </MotionDivDownToUp>

          <MotionDivDownToUp>
            <IconFeatureCard
              icon={content.texts.features.card10.icon}
              title={content.texts.features.card10.title}
              paragraph={content.texts.features.card10.subtitle}
              className="m-auto"
              colorMode={colorMode}
            />
          </MotionDivDownToUp>

          <MotionDivDownToUp>
            <IconFeatureCard
              icon={content.texts.features.card11.icon}
              title={content.texts.features.card11.title}
              paragraph={content.texts.features.card11.subtitle}
              className="m-auto"
              colorMode={colorMode}
            />
          </MotionDivDownToUp>

          <MotionDivDownToUp>
            <IconFeatureCard
              icon={content.texts.features.card12.icon}
              title={content.texts.features.card12.title}
              paragraph={content.texts.features.card12.subtitle}
              className="m-auto"
              colorMode={colorMode}
            />
          </MotionDivDownToUp>

          <MotionDivDownToUp>
            <IconFeatureCard
              icon={content.texts.features.card13.icon}
              title={content.texts.features.card13.title}
              paragraph={content.texts.features.card13.subtitle}
              className="m-auto"
              colorMode={colorMode}
            />
          </MotionDivDownToUp>

          <MotionDivDownToUp>
            <IconFeatureCard
              icon={content.texts.features.card14.icon}
              title={content.texts.features.card14.title}
              paragraph={content.texts.features.card14.subtitle}
              className="m-auto"
              colorMode={colorMode}
            />
          </MotionDivDownToUp>

          <MotionDivDownToUp>
            <IconFeatureCard
              icon={content.texts.features.card15.icon}
              title={content.texts.features.card15.title}
              paragraph={content.texts.features.card15.subtitle}
              className="m-auto"
              colorMode={colorMode}
            />
          </MotionDivDownToUp>

          <MotionDivDownToUp>
            <IconFeatureCard
              icon={content.texts.features.card16.icon}
              title={content.texts.features.card16.title}
              paragraph={content.texts.features.card16.subtitle}
              className="m-auto"
              colorMode={colorMode}
            />
          </MotionDivDownToUp>

          <MotionDivDownToUp>
            <IconFeatureCard
              icon={content.texts.features.card17.icon}
              title={content.texts.features.card17.title}
              paragraph={content.texts.features.card17.subtitle}
              className="m-auto"
              colorMode={colorMode}
            />
          </MotionDivDownToUp>

          <MotionDivDownToUp>
            <IconFeatureCard
              icon={content.texts.features.card18.icon}
              title={content.texts.features.card18.title}
              paragraph={content.texts.features.card18.subtitle}
              className="m-auto"
              colorMode={colorMode}
            />
          </MotionDivDownToUp>

          <MotionDivDownToUp>
            <IconFeatureCard
              icon={content.texts.features.card19.icon}
              title={content.texts.features.card19.title}
              paragraph={content.texts.features.card19.subtitle}
              className="m-auto"
              colorMode={colorMode}
            />
          </MotionDivDownToUp>

          <MotionDivDownToUp>
            <IconFeatureCard
              icon={content.texts.features.card20.icon}
              title={content.texts.features.card20.title}
              paragraph={content.texts.features.card20.subtitle}
              className="m-auto"
              colorMode={colorMode}
            />
          </MotionDivDownToUp> */}
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
