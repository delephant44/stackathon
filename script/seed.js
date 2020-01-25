'use strict'

const db = require('../server/db')
const {User, Client, Gym} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      name: 'Link',
      imageUrl:
        'http://images.nintendolife.com/news/2018/06/gallery_super_smash_bros_ultimate_character_artwork/list-item/2/image/0/large.jpg',
      origin: 'The Legend of Zelda',
      bio: 'Haayaaaah!',
      email: 'link@link.com',
      password: '123'
    })
  ])

  const clients = await Promise.all([
    Client.create({
      name: 'Zelda',
      imageUrl:
        'http://images.nintendolife.com/news/2018/06/gallery_super_smash_bros_ultimate_character_artwork/list-item/17/image/0/large.jpg',
      goals: 'Build magical endurance.',
      userId: 1
    }),
    Client.create({
      name: 'Ganondorf',
      imageUrl:
        'http://images.nintendolife.com/news/2018/06/gallery_super_smash_bros_ultimate_character_artwork/list-item/23/image/0/large.jpg',
      goals:
        'Already the buffest person in Hyrule. Need more cardio for the Triforce games.',
      userId: 1
    })
  ])

  const gyms = await Promise.all([
    Gym.create({
      name: 'Hyrule Castle',
      imageUrl:
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fb452110-a2b9-48f8-b9b4-d1e59be950ca/daq6xf8-ef3f5642-364f-4d8c-9db6-233a39f0b5d2.png/v1/fill/w_1023,h_589,strp/legend_of_zelda___hyrule_castle_by_minionslayer_daq6xf8-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTg5IiwicGF0aCI6IlwvZlwvZmI0NTIxMTAtYTJiOS00OGY4LWI5YjQtZDFlNTliZTk1MGNhXC9kYXE2eGY4LWVmM2Y1NjQyLTM2NGYtNGQ4Yy05ZGI2LTIzM2EzOWYwYjVkMi5wbmciLCJ3aWR0aCI6Ijw9MTAyMyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.2YCwV8f-yEeR-RK6xLhaHIGpWm4U14nGAo8lyF_fjT4',
      location: 'Hyrule',
      userId: 1
    })
  ])

  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
