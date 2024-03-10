# How to setup project

move to folder HACKFEST [cd HACKFEST]

install all the dependencies [npm i]

create a ".env" file and copy paste contents of "env.example" file

add MongoDb Atlas link


# running:

  react- [npm run dev]
  
  server(express)- [node server.js]

  run those commands in two diferent terminals

# working with prisma:
  after changing the schema.prisma file,
  
  [npx prisma generate]
  
  [npx prisma db push] do it before commiting changes to github
  
  *to see the final database tables/data*
  
   [npx prisma studio] - opens a gui to see the data and schema


