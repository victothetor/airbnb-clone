import PropertyService from "@/server/service/Property";

export async function GET(request) {
    const propertyService = new PropertyService();
    const properties = propertyService.getProperties();
    const response = {
      properties: properties,
    };
  
    return new Response(JSON.stringify(response), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
}