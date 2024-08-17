const {PrismaClient} = require("@prisma/client");
const {faker}  = require("@faker-js/faker");

const prisma  = new PrismaClient();

async function UserSeeder(){
    console.log("user seeding started");

    for(let i = 0; i < 10; i++){
        const firstName = faker.person.firstName();
        const lastName  = faker.person.lastName();
        const password  = ("123456");

        const name  = `${firstName}${lastName}`;
        const username = `${firstName}${lastName[0]}`.toLocaleLowerCase();
        const bio      = faker.person.bio();


        await prisma.user.upsert({
            where: {username},
            update: {},
            create: {name,username,bio,password},
        });
    }
    console.log("user seeding done");
}
module.exports = {UserSeeder};