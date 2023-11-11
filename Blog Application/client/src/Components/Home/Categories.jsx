import React from 'react'
import { Button, Table, TableHead, TableCell, TableBody, TableRow, styled } from '@mui/material'
import { Link, useSearchParams } from 'react-router-dom'
const DataCat = [
  { id: 1, category: "Music" },
  { id: 2, category: "Technology" },
  { id: 3, category: "Laptops" },
  { id: 4, category: "Games" },
  
]

const Tablestyled = styled(Table)`
    font-family: Times New Roman, Times, serif;
`

const Btn = styled(Button)`
background:Black;
color:white;
`

const Categories = () => {
  //custorm hook h toh destructuring krni padi//
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');


  const StyledLink = styled(Link)`
    text-decoration:none;
    color:black;
  `

  return (
    <div>
      <StyledLink to={`/createpost?category=${category || ''}`}>
        <Btn variant="contained">Create Blog</Btn>
      </StyledLink>

      <Tablestyled>
        <TableHead>

          <TableCell><StyledLink to="/">All Categories</StyledLink></TableCell>

        </TableHead>
        <TableBody>

          {
            DataCat.map((e) => {
              return (
                <TableRow key={e.id}>
                  <TableCell><StyledLink to={`/?category=${e.category}`}>{e.category}</StyledLink></TableCell>
                </TableRow>
              )
            })
          }

        </TableBody>
      </Tablestyled>

    </div>
  )
}

export default Categories
