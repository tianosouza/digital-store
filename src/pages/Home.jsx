import ContainerMain from '../components/ContainerMain';
import CollectionHighlight from '../components/HomeComponents/CollectionHighlight';
import MainHome from '../components/HomeComponents/MainHome';
import Offer from '../components/HomeComponents/Offer';

export default function Home() {
  return (
    <ContainerMain>
      <MainHome />
      <CollectionHighlight />
      <Offer />
    </ContainerMain>
  );
}