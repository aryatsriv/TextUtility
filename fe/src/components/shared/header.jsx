import { Form, FormControl, InputGroup, Nav,Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <div>
        <Navbar bg="dark" className="justify-content-between">
            <Form inline="true">
                <InputGroup>
                <FormControl
                placeholder='Search Term'
                aria-label='Username'
                aria-describedby='basic-addon1'
                ></FormControl>
                </InputGroup>
            </Form>
        </Navbar>
    </div>
  );
}

export default Header;