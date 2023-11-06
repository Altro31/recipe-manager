import { RecipeManager } from './(defs)/RecipeManager'


export const recipeManager = RecipeManager.getInstance()

// Arroz con Leche
recipeManager.addRecipe(

    //Id: 1

    //name
    'Arroz con Leche',

    //Ingredients
    [
        'Arroz',
        'Leche',
        'Canela',
        'Azucar',
    ],

    //Preparation Steps
    '1. Lava el arroz en un colador bajo agua fría hasta que el agua salga clara. ' +
    '2. En una cacerola grande, agrega el arroz, la leche y una rama de canela. ' +
    '3. Lleva la mezcla a ebullición a fuego medio-alto, luego reduce el fuego y deja cocinar a fuego lento durante 30-40 minutos, revolviendo ocasionalmente, hasta que el arroz esté tierno y la mezcla tenga una consistencia cremosa. ' +
    '4. Agrega el azúcar y continúa cocinando durante unos minutos más hasta que el azúcar se disuelva por completo y el arroz con leche esté dulce al gusto. ' +
    '5. Retira la rama de canela y desecha. ' +
    '6. Sirve el arroz con leche en tazones individuales y espolvorea con un poco de canela en polvo por encima si lo deseas. ' +
    '7. Puedes servirlo caliente o refrigerarlo y servirlo frío. ¡Disfruta de este postre delicioso!',

    //Image URL
    '/arroz_con_leche.jpg'
)

// Flan
recipeManager.addRecipe(

    //Id: 2

    //name
    'Flan',

    //Ingredients
    [
        'Leche',
        'Huevo',
        'Azucar',
    ],

    //Preparation Steps
    '1. En una cacerola, calienta la leche a fuego medio hasta que esté caliente pero no hierva. ' +
    '2. Mientras tanto, en un tazón grande, bate los huevos y el azúcar hasta que la mezcla esté suave y homogénea. ' +
    '3. Vierte la leche caliente sobre la mezcla de huevo y azúcar mientras revuelves constantemente para evitar que los huevos se cocinen. ' +
    '4. Vuelve a verter la mezcla en la cacerola y caliéntala a fuego medio-bajo, revolviendo constantemente hasta que espese lo suficiente para cubrir la parte posterior de una cuchara. ' +
    '5. Retira la cacerola del fuego y vierte la mezcla en moldes individuales para flan. ' +
    '6. Deja que los flanes se enfríen a temperatura ambiente y luego refrigéralos durante al menos 2 horas o hasta que estén completamente fríos. ' +
    '7. Para servir, pasa un cuchillo alrededor del borde de cada flan y dale la vuelta en un plato para desmoldarlo. El caramelo líquido se verterá sobre el flan. ¡Disfruta!',

    //Image URL
    '/flan.jpg'
)

// Torrejas
recipeManager.addRecipe(

    //Id: 3

    //name
    'Torrejas',

    //Ingredients
    [
        'Leche',
        'Huevo',
        'Azucar',
        'Canela',
        'Aceite',

    ],

    //Preparation Steps
    '1. En un tazón, mezcla la leche, el huevo, el azúcar y una pizca de canela hasta obtener una mezcla homogénea. ' +
    '2. Calienta un poco de aceite en una sartén grande a fuego medio. ' +
    '3. Sumerge rebanadas de pan en la mezcla de leche y huevo, asegurándote de que estén bien cubiertas. ' +
    '4. Fríe las rebanadas de pan en el aceite caliente hasta que estén doradas por ambos lados. ' +
    '5. Retira las torrejas y colócalas sobre papel absorbente para eliminar el exceso de aceite. ' +
    '6. Espolvorea con azúcar y canela adicional, si lo deseas. ' +
    '7. Sirve las torrejas calientes y disfruta de este delicioso postre casero.',
    //Image URL
    '/torrejas.jpg'
)
// Arepas
recipeManager.addRecipe(

    //Id: 4

    //name
    'Arepas',

    //Ingredients
    [
        'Leche',
        'Huevo',
        'Azucar',
        'Harina',
        'Agua',
        'Vainilla',
    ],

    //Preparation Steps
    '1. En un tazón, mezcla la harina de maíz y la sal. ' +
    '2. Agrega agua poco a poco y mezcla con las manos hasta obtener una masa suave y homogénea. ' +
    '3. Forma bolas del tamaño de una pelota de golf con la masa y aplástalas para darles forma de disco, de aproximadamente 1 cm de grosor. ' +
    '4. Calienta una sartén grande a fuego medio-alto y añade un poco de aceite. ' +
    '5. Cocina las arepas en la sartén caliente, dorándolas por ambos lados hasta que estén crujientes y cocidas en el interior (aproximadamente 4-5 minutos por lado). ' +
    '6. Sirve las arepas calientes y disfrútalas con tu relleno favorito, como queso, carne, aguacate o lo que prefieras.',

    //Image URL
    '/arepas.jpg'
)
// Panetela
recipeManager.addRecipe(

    //Id: 5

    //name
    'Panetela',

    //Ingredients
    [
        'Huevo',
        'Azucar',
        'Harina',
    ],

    //Preparation Steps
    '1. Precalienta el horno a 180°C (350°F) y engrasa un molde para hornear. ' +
    '2. En un tazón, bate los huevos y el azúcar hasta que la mezcla esté espumosa y de color claro. ' +
    '3. Agrega la harina poco a poco y mezcla suavemente hasta que la masa esté homogénea. ' +
    '4. Vierte la masa en el molde preparado y extiéndela de manera uniforme. ' +
    '5. Hornea en el horno precalentado durante aproximadamente 25-30 minutos, o hasta que esté dorada y firme al tacto. ' +
    '6. Retira del horno y deja enfriar en el molde durante unos minutos. ' +
    '7. Desmolda la panetela y córtala en porciones. ' +
    '8. Sirve y disfruta de esta deliciosa panetela como postre o merienda.',

    //Image URL
    '/pudin.jpg'
)