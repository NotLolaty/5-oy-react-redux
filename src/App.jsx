import { useSelector, useDispatch } from "react-redux";
import { increment, reduction, addNumber } from "./store/reducers/count";
import { Button, Stack, Typography } from "@mui/material";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const random = () => {
    const ran = Math.round(Math.random() * 100);
    dispatch(addNumber(ran));
  };

  return (
    <>
      <Stack direction="row" spacing={2}>
        <Typography variant="h1">{count}</Typography>

        <Button variant="contained" onClick={() => dispatch(increment())}>
          +
        </Button>
        <Button
          style={{ marginLeft: "5px", marginRight: "5px" }}
          variant="contained"
          onClick={() => dispatch(reduction())}
        >
          -
        </Button>
        <Button variant="contained" onClick={random}>
          Random
        </Button>
      </Stack>
    </>
  );
}

export default App;
