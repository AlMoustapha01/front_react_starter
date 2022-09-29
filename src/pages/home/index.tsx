import { Text } from '@mantine/core';
import { Button as PrButton } from 'primereact/button';
const Home = ()=> {

    return(
        <div>
            <Text>Welcome to Mantine!</Text>
            <PrButton label="Click" icon="pi pi-check" />
        </div>
    )
}

export default Home;