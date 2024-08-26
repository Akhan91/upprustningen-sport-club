import { CardContent } from '@/components/shadcn/card';
import Image from 'next/image';
import logoIcon from '../../../public/logo_circular.webp';
import TimelineComponent from '@/components/TimelineComponent';
import aboutUsImg from '../../../public/img/aboutUs.webp';

const AboutUs: React.FC = () => {
  return (
    <main className='min-h-screen w-full bg-secondary flex flex-col items-center'>
      {/* Hero Section */}
      <div className='relative w-full min-h-screen'>
        <Image
          src={aboutUsImg}
          alt='About Us Background'
          layout='fill'
          objectFit='cover'
          className='w-full h-full object-cover opacity-60'
        />
        <div className='absolute inset-0 flex flex-col justify-center items-center p-4'>
          <h1 className='text-secondary-foreground text-4xl font-bold text-center md:text-6xl'>
            Om Upprustningen Sports Club
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className='mt-12 mb-24 w-full text-secondary-foreground p-4 md:p-6'>
        <section className='flex flex-col items-center text-center p-4'>
          <Image
            src={logoIcon}
            width={100}
            height={100}
            alt='Club Logo'
            className='rounded-full shadow-lg mb-4'
          />
          <h2 className='text-secondary-foreground text-3xl font-bold mb-2'>Om Upprustningen Sports Club</h2>
          <p className='text-base'>
            Grundades år 2023, vårt uppdrag är att stärka individer genom högkvalitativ träning, och främja
            både fysisk och mental utveckling.
          </p>
        </section>

        <CardContent className='flex flex-col md:flex-row p-4 md:p-6'>
          <div className='flex-1 md:mr-6'>
            <h3 className='font-semibold mb-4'>Vår filosofi</h3>
            <p className='text-base leading-relaxed mb-6'>
              Välkommen till Total Sports Club! Vi är stolta över att presentera vår nyöppnade klubb i Järva
              som är en plats där passionerade idrottare och kampsportsentusiaster kan komma samman för att
              utmana sig själva, växa som individer och uppnå sina träningsmål. På vår klubb erbjuder vi en
              dynamisk och stödjande miljö som främjar teknisk utveckling, fysisk styrka och mental skärpa.
              Oavsett om du är nybörjare eller erfaren inom kampsport, är du hjärtligt välkommen till oss. Vår
              klubb är öppen för alla, oavsett ålder och tidigare erfarenhet. Vi tror på att skapa en
              inkluderande gemenskap där varje medlem kan trivas och utvecklas. Vårt erfarna tränarteam består
              av dedikerade och kunniga instruktörer som brinner för att dela med sig av sin kunskap och
              hjälpa dig att nå nya höjder. Genom noggrant strukturerade träningsprogram och individuell
              vägledning fokuserar vi på att förbättra teknik, kondition och självförtroende hos våra
              medlemmar. Vi brinner väldigt mycket för brottning och grappling då det är den bästa basen för
              all kampsport. Dessa två sporter är unika, speciellt fristilsbrottning som kombinerar teknisk
              skicklighet, snabbhet, explosivitet, kreativitet och improvisation. Dess globala popularitet och
              förmåga att engagera människor runt om i världen gör det till en av de bästa sporterna som
              finns. Total Sports Club har målet att uppmuntra en hälsosam livsstil och få unga att engagera
              sig i regelbunden motion istället för att ägna sig åt mindre gynnsamma aktiviteter. Genom att
              erbjuda träning och utbildning inom kampsport, strävar klubben efter att locka ungdomar till att
              bli fysiskt aktiva, bygga styrka och kondition samt utveckla värdefulla livsfärdigheter som
              disciplin, respekt och kamratskap. Målet är att erbjuda en meningsfull och positiv
              fritidsaktivitet som kan gynna unga fysiska och mentala hälsa på lång sikt. Vi satsar även på
              att stödja vuxna… Vi ser fram emot att välkomna dig till vårt brottnings/MMA-team och hjälpa dig
              att nå dina träningsmål. Tillsammans skapar vi en starkare och mer passionerad kampsportsfamilj!
            </p>

            <section>
              <h3 className='font-semibold mb-4'>Våra Tränare</h3>
              <p className='text-base leading-relaxed'>
                Vårt erfarna tränarteam inkluderar erfarna proffs med imponerande bakgrunder inom olika
                kampsportsdiscipliner. De är dedikerade till att hjälpa dig att nå din personliga bästa nivå.
              </p>
            </section>
          </div>
        </CardContent>
        <TimelineComponent />
      </div>
    </main>
  );
};

export default AboutUs;
