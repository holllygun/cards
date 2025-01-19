import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import { Cards } from './Components/Cards';
import {Card } from './Components/Card'

function App() {

  return (
    <Cards>
      <Card  image="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500-400x400.jpg" title="title" text="text"/>
      <Card title ="title2" text="Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo" />
      <Card title="Title 3" text="Text3"/>
    </Cards>
  )
}

export default App
