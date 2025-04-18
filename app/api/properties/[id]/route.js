import connectDB from '@/config/database'
import Property from '@/models/Property'

// GET /api/properties/:id
export const GET = async (request, context) => {
    const { id } = await context.params
    try {
        await connectDB()

        const property = await Property.findById(id)

        if (!property) return new Response('Property Not Found', { status: 404 })

        return new Response(JSON.stringify(property), { status: 200 })

    } catch (error) {
        console.log(error)
        return new Response({ message: 'Sth went wrong' }, { status: 500 })
    }
}