import React from 'react'
import { Box, Button, FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { createTicket } from '../reducers/tikect/actions';
import { startListQueue } from '../reducers/queue/actions';


const FormTicket = () => {
    
    const dispatch = useDispatch();
    const initialValues={ id_user_ticket: '', name_user_ticket: '' }
    
  return (
    <Box
        width={"100%"}
        padding={"25px"}
        background="#0E185F"
        marginTop={"20px"}
        height="400px"
        display={"flex"}
        alignItems="center"
        justifyContent={"center"}
        borderRadius="5px"
        boxShadow={"2xl"}
    >
        <Formik
            initialValues={initialValues}
            onSubmit={async ({id_user_ticket, name_user_ticket}, actions) => {
              /* setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                actions.setSubmitting(false)
              }, 1000) */
                actions.setSubmitting(false);
                await dispatch(createTicket({documentation_number: id_user_ticket, name: name_user_ticket}));
                await dispatch(startListQueue());

            }}
            onReset={initialValues}
        >
            {(props) => (
                <Box
                    background={'whiteAlpha.100'}
                    width="400px"
                    height={"350px"}
                    padding={"7"}
                    color={"white"}
                    borderRadius={"10px"}
                    
                >

                    <Form>
                        {/* Numero de identificacion */}
                        <Field name='id_user_ticket'>
                            {({field, form}) => (
                                <FormControl isInvalid={form.errors.name && form.touched.name} isRequired>
                                    <FormLabel htmlFor='id_user_ticket'>Numero de Identificacion</FormLabel>
                                    <Input {...field} id='id_user_ticket' type='number' placeholder='Numero de Indentificación'/>
                                </FormControl>

                            )}
                        </Field>

                        {/* Nombre del usuario */}
                        <Field name='name_user_ticket'>
                            {({field, form}) => (
                                <FormControl isInvalid={form.errors.name && form.touched.name} isRequired>
                                    <FormLabel htmlFor='name_user_ticket'>Nombre</FormLabel>
                                    <Input {...field} id='name_user_ticket' type='text' placeholder='Nombre'/>
                                </FormControl>

                            )}
                        </Field>

                        <Box
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems="center"
                        >
                            <Button
                                mt={4}
                                colorScheme='whiteAlpha'
                                isLoading={props.isSubmitting}
                                type='submit'
                            >
                                Enviar
                            </Button>

                        </Box>
                    </Form>

                </Box>
            )}


        </Formik>
    </Box>
  )
}

export default FormTicket;