import { Appbar } from "react-native-paper";

export const CustomNavigationBar = (title) => {

    return(
        <Appbar.Header>
            <Appbar.Content>{title}</Appbar.Content>
        </Appbar.Header>
    )
}