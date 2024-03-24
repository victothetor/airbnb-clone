import PropertyService from "@/server/service/Property";

export async function GET(request, { params }) {
    const { id } = params;
    const propertyService = new PropertyService();
    const property = propertyService.getPropertyById(id)
    
    const response = {
        property: property
    };
    return new Response(JSON.stringify(response), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
}