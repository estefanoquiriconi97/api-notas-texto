
const main = async(schema, data)=> {
    try {

        await schema.valiteAsync(data);
        
    } catch (error) {
        
    }
}