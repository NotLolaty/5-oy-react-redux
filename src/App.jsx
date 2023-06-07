import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  reduction,
  addNumber,
  resetNum,
} from "./store/reducers/count";
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
      <div style={{ margin: "0 auto", display: "flex" }}>
        <div style={{ margin: "0 auto" }}>
          <Stack direction="row" spacing={2}>
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
            <Button variant="contained" onClick={() => dispatch(resetNum())}>
              Reset
            </Button>
          </Stack>
          <Typography
            variant="h1"
            style={{ margin: "0 auto", position: "absolute", right: "730px" }}
          >
            {count}
          </Typography>
        </div>
      </div>
    </>
  );
}

export default App;
