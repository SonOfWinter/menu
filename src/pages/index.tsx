import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql } from 'gatsby';
import './index.css'
import MenuSection from '../components/menuSection';
import Paper from '../components/paper';
import { DataType } from '../data/types';

const IndexPage: React.FC<PageProps> = ({data}) => {
  const mainColor = "#CF9A39";
  return (
    <Paper
      color={mainColor}
      format="card"
      menuList={data.menu.edges}
      complementList={data.complement.edges}
    >

      <MenuSection
        color={mainColor}
        title="Entrée"
        type='entree'
        data={data as DataType}
        />

      <MenuSection
        color={mainColor}
        title="Plat"
        type='plat'
        data={data as DataType}
      />

      <MenuSection
        color={mainColor}
        title="Dessert"
        type='dessert'
        data={data as DataType}
      />

    </Paper>
  )
}
export const query = graphql`
    query MenuQuery {
        menu: allAirtable(
            filter: {
                table: { eq: "Menu" }
            }
        ) {
            edges {
                node {
                    recordId
                    data {
                        Nom
                    }
                }
            }
        }
        complement: allAirtable(
            filter: {
                table: { eq: "Complement" }
            }
        ) {
            edges {
                node {
                    recordId
                    data {
                        Nom
                    }
                }
            }
        }
        plat: allAirtable(
            filter: {
                table: { eq: "Plat" }
            }
        ) {
            edges {
                node {
                    recordId
                    data {
                        Nom
                        Genre
                        Nombre
                        Types
                        Entree
                        Plat
                        Dessert
                    }
                }
            }
        }
        ingredient: allAirtable(
            filter: {
                table: { eq: "Ingredient" }
            }
        ) {
            edges {
                node {
                    recordId
                    data {
                        Nom
                        Genre
                        Nombre
                        Types
                        DetermimantPrincipal
                        DeterminantSecondaire
                        AdjectifPossessif
                    }
                }
            }
        }
        adjectif: allAirtable(
            filter: {
                table: { eq: "Adjectif" }
            }
        ) {
            edges {
                node {
                    recordId
                    data {
                        Nom_M_S
                        Nom_M_P
                        Nom_F_S
                        Nom_F_P
                        Types
                    }
                }
            }
        }
        pre: allAirtable(
            filter: {
                table: { eq: "Pre" }
            }
        ) {
            edges {
                node {
                    recordId
                    data {
                        Nom_M_S
                        Nom_M_P
                        Nom_F_S
                        Nom_F_P
                        Types
                    }
                }
            }
        }
        post: allAirtable(
            filter: {
                table: { eq: "Post" }
            }
        ) {
            edges {
                node {
                    recordId
                    data {
                        Nom
                        Types
                    }
                }
            }
        }
        lien: allAirtable(
            filter: {
                table: { eq: "Lien" }
            }
        ) {
            edges {
                node {
                    recordId
                    data {
                        Nom_M_S
                        Nom_M_P
                        Nom_F_S
                        Nom_F_P
                        Suite
                    }
                }
            }
        }
    }
`
export default IndexPage

export const Head: HeadFC = () => <title>Menu</title>
