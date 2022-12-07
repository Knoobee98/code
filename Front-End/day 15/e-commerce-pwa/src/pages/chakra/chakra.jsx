import {
    Button, 
    Input, 
    VStack, 
    Textarea, 
    Text, 
    Heading, 
    Grid, 
    GridItem
} from '@chakra-ui/react'

let Chakra = () => {
    return(
        <div>
            <VStack >
            <Heading>
                Chakra
            </Heading>
            <Input placeholder='Input Here' size='md'></Input>
            <Textarea placeholder='Textarea Here' size='md'></Textarea>
            <Button colorScheme="red" size='md'>Click Here!</Button>
            </VStack>
            <Text fontSize='lg'>Large</Text>
            <Text fontSize='md'>Medium</Text>
            <Text fontSize='sm'>Small</Text>

            <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                <GridItem w='100%' h='100px' bg='blue.400'>
                    <Text fontSize='lg'>Large</Text>
                </GridItem>
                <GridItem w='100%' h='100px' bg='blue.300'>
                    <Text fontSize='lg'>Large</Text>
                </GridItem>
                <GridItem w='100%' h='100px' bg='blue.400'>
                    <Text fontSize='lg'>Large</Text>
                </GridItem>
                <GridItem w='100%' h='100px' bg='blue.300'>
                    <Text fontSize='lg'>Large</Text>
                </GridItem>
                <GridItem w='100%' h='100px' bg='blue.400'>
                    <Text fontSize='lg'>Large</Text>
                </GridItem>
            </Grid>
            <br/>
            <Grid h='200px' templateRows='repeat(2, 1fr)' templateColumns='repeat(5, 1fr)' gap={4}>
                <GridItem bg='tomato' rowSpan={2} colSpan={1} />
                <GridItem bg='papayawhip' colSpan={2} />
                <GridItem bg='tomato' colSpan={2} />
                <GridItem bg='papayawhip' colSpan={4} />
                <GridItem bg='tomato' colSpan={1} />
            </Grid>
        </div>
    )
}

export default Chakra