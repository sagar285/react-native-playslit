import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'

const Test = () => {
  return (
    <ScrollView
    accessibilityActions={[
        { name: "scrollforward", label: "Scroll Down" },
        { name: "scrollbackward", label: "Scroll Up" }
      ]}
      onAccessibilityAction={(event) => {
        if (event.nativeEvent.actionName === "scrollforward") {
          console.log("Scrolling down");
        }
        if (event.nativeEvent.actionName === "scrollbackward") {
          console.log("Scrolling up");
        }
      }}
    

    >
      <Text>
        Lorem ipsum dolor sit amet consectetur, 
        adipisicing elit. Iusto, odit repellat! Suscipit minima vero iure eum libero nulla assumenda voluptatibus magnam, excepturi iste explicabo, possimus sint, dicta sequi earum doloribus ratione reprehenderit expedita sapiente. Cum harum reiciendis obcaecati fugiat dolores ea nostrum, vel error doloribus repellendus ut numquam porro odit esse tempore, deleniti magni praesentium, nemo incidunt illum beatae! Quae necessitatibus soluta, vel tempora ullam qui recusandae obcaecati aliquid voluptatum magnam tempore odit sed repudiandae sequi similique, voluptates praesentium expedita numquam labore iste repellat exercitationem est pariatur cumque. Natus possimus nostrum itaque rem vel. Vero odio maiores ducimus nemo tempora dolores quasi, impedit veritatis qui incidunt, repudiandae ipsum corrupti id maxime rem odit porro obcaecati consequuntur ipsam, fuga illum blanditiis possimus atque assumenda. Aspernatur incidunt nihil unde quidem. Dicta, vitae sed vel neque repellendus consequuntur earum, pariatur minima itaque aliquid dolorem enim aut atque accusamus quia! Pariatur illum fuga totam voluptates, accusamus esse nesciunt ab commodi sunt delectus aliquam vitae praesentium exercitationem quasi veniam labore maiores minima ratione! Consequatur aspernatur quam iste nulla sed necessitatibus aut itaque obcaecati hic sint et dolore minus facilis ea corrupti praesentium quisquam quia dolorum tenetur repudiandae aperiam,
        ad officiis. Autem eveniet repellendus expedita eos.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur, 
        adipisicing elit. Iusto, odit repellat! Suscipit minima vero iure eum libero nulla assumenda voluptatibus magnam, excepturi iste explicabo, possimus sint, dicta sequi earum doloribus ratione reprehenderit expedita sapiente. Cum harum reiciendis obcaecati fugiat dolores ea nostrum, vel error doloribus repellendus ut numquam porro odit esse tempore, deleniti magni praesentium, nemo incidunt illum beatae! Quae necessitatibus soluta, vel tempora ullam qui recusandae obcaecati aliquid voluptatum magnam tempore odit sed repudiandae sequi similique, voluptates praesentium expedita numquam labore iste repellat exercitationem est pariatur cumque. Natus possimus nostrum itaque rem vel. Vero odio maiores ducimus nemo tempora dolores quasi, impedit veritatis qui incidunt, repudiandae ipsum corrupti id maxime rem odit porro obcaecati consequuntur ipsam, fuga illum blanditiis possimus atque assumenda. Aspernatur incidunt nihil unde quidem. Dicta, vitae sed vel neque repellendus consequuntur earum, pariatur minima itaque aliquid dolorem enim aut atque accusamus quia! Pariatur illum fuga totam voluptates, accusamus esse nesciunt ab commodi sunt delectus aliquam vitae praesentium exercitationem quasi veniam labore maiores minima ratione! Consequatur aspernatur quam iste nulla sed necessitatibus aut itaque obcaecati hic sint et dolore minus facilis ea corrupti praesentium quisquam quia dolorum tenetur repudiandae aperiam,
        ad officiis. Autem eveniet repellendus expedita eos.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur, 
        adipisicing elit. Iusto, odit repellat! Suscipit minima vero iure eum libero nulla assumenda voluptatibus magnam, excepturi iste explicabo, possimus sint, dicta sequi earum doloribus ratione reprehenderit expedita sapiente. Cum harum reiciendis obcaecati fugiat dolores ea nostrum, vel error doloribus repellendus ut numquam porro odit esse tempore, deleniti magni praesentium, nemo incidunt illum beatae! Quae necessitatibus soluta, vel tempora ullam qui recusandae obcaecati aliquid voluptatum magnam tempore odit sed repudiandae sequi similique, voluptates praesentium expedita numquam labore iste repellat exercitationem est pariatur cumque. Natus possimus nostrum itaque rem vel. Vero odio maiores ducimus nemo tempora dolores quasi, impedit veritatis qui incidunt, repudiandae ipsum corrupti id maxime rem odit porro obcaecati consequuntur ipsam, fuga illum blanditiis possimus atque assumenda. Aspernatur incidunt nihil unde quidem. Dicta, vitae sed vel neque repellendus consequuntur earum, pariatur minima itaque aliquid dolorem enim aut atque accusamus quia! Pariatur illum fuga totam voluptates, accusamus esse nesciunt ab commodi sunt delectus aliquam vitae praesentium exercitationem quasi veniam labore maiores minima ratione! Consequatur aspernatur quam iste nulla sed necessitatibus aut itaque obcaecati hic sint et dolore minus facilis ea corrupti praesentium quisquam quia dolorum tenetur repudiandae aperiam,
        ad officiis. Autem eveniet repellendus expedita eos.
      </Text>
    </ScrollView>
  )
}

export default Test

const styles = StyleSheet.create({})