import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import './index.css'
import MenuSection from '../components/menuSection';
import Paper from '../components/paper';

const IndexPage: React.FC<PageProps> = () => {
  const mainColor = "#CF9A39";
  return (
    <Paper color={mainColor} format="card">

      <MenuSection
        color={mainColor}
        type="Entrée"
        title="Sélection de chocolat au lait vinaigré"
        subtitle="Parfumé de mouton sauvage des hauts plateaux"
        />

      <MenuSection
        color={mainColor}
        type="Plat"
        title="Envolé de piments gélifiés"
        subtitle="Et sa myriade de citrons d'autrefois"
      />

      <MenuSection
        color={mainColor}
        type="Dessert"
        title="Farce d'abats givrée"
        subtitle="Nappé de caramel cru"
      />

    </Paper>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Menu</title>
