import { Link } from '@chakra-ui/react';
import { Article, Layout, Section } from '../components';
import { externalRoute } from '../constants/routes';

const AboutProject = () => (
  <Layout flexDir="column" padding={10}>
    <Section>
      <Article title="LivroLume">
        LivroLume is your passport to a captivating world of literature. As a
        sophisticated EPUB reader, LivroLume offers an immersive and
        user-friendly platform to delve into your favorite stories, documents,
        and publications.
      </Article>
      <Article title="About the Project">
        This project is open-source. You can check it out{' '}
        <Link isExternal href={externalRoute.project}>
          here
        </Link>
        .
      </Article>
    </Section>
  </Layout>
);

export default AboutProject;
