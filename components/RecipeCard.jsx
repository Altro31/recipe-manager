import {Card, CardFooter} from '@nextui-org/react'
import Image from "next/image";
import Link from "next/link";
import { motion} from "framer-motion";


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

export default function RecipeCard({data}) {
    return (<motion.div
            layoutId={data.id}
            exit={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                transition: {
                    duration: 1
                }
            }}
            whileHover={{
                scale: 1.05,
            }}
            whileTap={{
                scale: 1,
            }}
        >
            <Card
                as={Link}
                isPressable
                href={`http://localhost:3000/recipe/${data.id}`}
                isHoverable
                isFooterBlurred
                className='self-center'
            >
                <Image src={data.imageUrl} alt={data.name} height={50} width={100} className="h-52 object-cover w-full"/>
                <CardFooter className="bg-gray-900 justify-center text-white">
                    <span>{data.name}</span>
                </CardFooter>
            </Card>
        </motion.div>
    )
}