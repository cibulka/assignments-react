import styled from "styled-components";

import { useItemsProvider } from "./providers/items-provider/hooks";
import { ListItem } from "./ListItem";

export const ListStyled = styled.div`
    display: flex;
    flex-direction: column;
`;

export const List = () => {
    const { state } = useItemsProvider();

    // TODO: Implement items methods
    const onItemLabelEdit = console.log;
    const onItemDoneToggle = console.log;
    const onItemDelete = console.log;

    return (
        <ListStyled>
            {/* TODO: Implement error view */}
            {/* TODO: Implement empty view */}
            {/* TODO: Implement loading view */}
            {state.items.map(item => (
                <ListItem 
                    key={item.id} 
                    isDone={item.isDone} 
                    label={item.label} 
                    onItemLabelEdit={onItemLabelEdit}
                    onItemDoneToggle={onItemDoneToggle}
                    onItemDelete={onItemDelete}
                />
            ))}
        </ListStyled>
  );
};
