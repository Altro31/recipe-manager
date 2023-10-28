import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card'


/**Data contiene la info de la receta.
 * 
 * Propiedades de Data:
 *  -id: string              Id de la receta. Ej: data.id
 *  -name: string            Nombre de la receta
 *  -ingredients: string[]   Lista con todos los ingredientes
 *  -prepSteps: string       Pasos para realizar la receta
 *  -urlImage: string        ULR de la imagen de la receta
 * 
 * 
 * openDetail es una función que no tiene parámetros que al llamarla, muestra los detalles de la receta
 */

export default function RecipeCard({ data, openDetail }) {
    return (
        <Card>
            <CardBody>
                <>Edita a partir de aquí</>
            </CardBody>
        </Card>
    )
}