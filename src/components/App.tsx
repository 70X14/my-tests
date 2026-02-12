import Alert from './Alert';
import Button from './Button';

export default function App() {
  return (
    <>
      <Alert type="error" message="Would you like to browse our recommended products?" />
      <Alert
        type="success"
        message="Payment received, thank you for your purchase"
      />
      <Alert
        type="error"
        message="Payment received, thank you for your purchase"
      />
      <Button variant="primary" text="Login" />
      <Button variant="secondary" text="Follow" />
    </>
  );
}
