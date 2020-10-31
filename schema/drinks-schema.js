const { GraphQLID, GraphQLString, GraphQLList, GraphQLSchema, GraphQLObjectType,} = require('graphql')
const DrinkModel = require('../models/drink-model')

const DrinkType = new GraphQLObjectType({
    name: "Drink",
    fields: {
        id: { type: GraphQLID},
        name: { type: GraphQLString},
        volume: { type: GraphQLString}
    }
})

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            drinks: {
                type: GraphQLList(DrinkType),
                resolve: ( root, args, context, info) => {
                    return DrinkModel.find().exec()
                }
            },
            drinksByName: {
                type: GraphQLList(DrinkType),
                resolve: (root, args, context, ingo) => {
                    return DrinkModel.find({'name': args.name}).exec()
                }
            },
        },
    }),
    mutation: new GraphQLObjectType({
        name: "Create",
        fields: {
            drinks: {
                type: DrinkType,
                args: {
                    name: { type: GraphQLString},
                    volume: { type: GraphQLString}
                },
                resolve: ( root, args, context, info) => {
                    const drinks = new DrinkModel(args)
                    return drinks.save()
                }
            }
        }
    })
});

module.exports = schema