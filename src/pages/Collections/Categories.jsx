// Categories.js
import React, { useContext, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';

const ModernAndContemporary = lazy(() => import('./ModernCategory'));
const AustralianArt = lazy(() => import('./AustralianCategory'));
const GlobalArtMovements = lazy(() => import('./GlobalaCategories'));
const Traditional = lazy(() => import('./Traditionalcategories'));
const CustomArtServices = lazy(() => import('./CustomArtServices'));
const Portraiture = lazy(() => import('./Portraiture'));
const AbstractPaintings = lazy(() => import('./AbstractPaintings'));
const Cultureandreligious = lazy(() => import('./Cultureand religious'));
const LandscapeandNature = lazy(() => import('./Landscapeand Nature'));
const WorldCulture = lazy(() => import('./World Culture'));




const Categories = () => {
  const context = useContext(myContext);
  const { slink } = useParams();

  const getCategoryComponent = (category) => {
    switch (category) {
      case 'modern-and-contemporary':
        return ModernAndContemporary;
      case 'australian-art':
        return AustralianArt;
      case 'global-art-movements-paintings':
        return GlobalArtMovements;
      case 'traditional-classical-art':
        return Traditional;
        case 'custom-art-services':
        return CustomArtServices;


        case 'portraiture':
          return Portraiture;
        case 'abstract-and-experimental':
          return AbstractPaintings;
        case 'Cultural-and-Religious-paintings':
          return Cultureandreligious;
        case 'landscape-and-nature':
          return LandscapeandNature;
          case 'world-culture-religion':
          return WorldCulture;
      default:
        return null;
    }
  };

  const CategoryComponent = getCategoryComponent(slink);

  if (!CategoryComponent) {
    return <div>Category not found</div>;
  }

  return (
   <Layout>

    <Suspense fallback={<div>Loading...</div>}>
      <CategoryComponent />
    </Suspense>
   </Layout>
  );
};

export default Categories;
