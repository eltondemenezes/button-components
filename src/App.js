import Button from "./components/Button";
import "./App.css";

function App() {
  return (
    <main>
      <h1>Button components</h1>
      <hr></hr>

      <p>Variants</p>
      <div className="container">
        <Button variant="default" />
        <Button variant="outline" />
        <Button variant="text" />
      </div>

      <p>Disable Shadow</p>
      <div className="container">
        <Button variant="default" disableShadow={true} />
      </div>

      <p>Disable</p>
      <div className="container">
        <Button variant="default" disabled={true} />
        <Button variant="text" disabled={true} />
      </div>

      <p>Icon Position</p>
      <div className="container">
        <Button variant="default" iconPos="before" />
        <Button variant="default" iconPos="after" />
      </div>

      <p>Button Size</p>
      <div className="container">
        <Button variant="default" size="sm" />
        <Button variant="default" size="md" />
        <Button variant="default" size="lg" />
      </div>

      <p>Button Color</p>
      <div className="container">
        <Button variant="default" />
        <Button variant="default" color="primary" />
        <Button variant="default" color="secondary" />
        <Button variant="default" color="danger" />
      </div>
    </main>
  );
}

export default App;
