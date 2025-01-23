import { Button } from "@/components/mui/Button";
import ComponentGrid from "@/components/utility/component-grid";
import ComponentCell from "@/components/utility/compontent-cell";

export default function ButtonPage() {
  return (
    <>
      <h1>Buttons</h1>
      <ComponentGrid>
        <ComponentCell title="Button Sizes">
          <Button size="large" variant="contained">
            Large
          </Button>
          <Button size="medium" variant="contained">
            Medium
          </Button>
          <Button size="small" variant="contained">
            Small
          </Button>
        </ComponentCell>
        <ComponentCell title="Button Variants">
          <Button size="medium">Primary</Button>
        </ComponentCell>
      </ComponentGrid>
    </>
  );
}
