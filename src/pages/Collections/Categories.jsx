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
      case 'traditional-paintings':
        return Traditional;
        case 'custom-art-services':
        return CustomArtServices;
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
