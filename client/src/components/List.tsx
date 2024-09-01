import styled from "styled-components";

import { useGetOnItemDelete, useGetOnItemLabelEdit, useItemsContext } from "./providers/items-provider/hooks";
import { ListItem } from "./ListItem";

export const ListStyled = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const List = () => {
    const { state } = useItemsContext();

    // TODO: Implement items methods
    const onItemDoneToggle = console.log;
    
    const getOnItemDelete = useGetOnItemDelete();
    const getOnItemLabelEdit = useGetOnItemLabelEdit();

    return (
        <ListStyled>
            {/* TODO: Implement error view */}
            {/* TODO: Implement empty view */}
            {/* TODO: Implement loading view */}
            {state.items.map(item => {
                const onItemDelete = getOnItemDelete(item.id);
                const onItemLabelEdit = getOnItemLabelEdit(item.id);
                return (
                    <ListItem 
                        key={item.id} 
                        isDone={item.isDone} 
                        label={item.label} 
                        onItemLabelEdit={onItemLabelEdit}
                        onItemDoneToggle={onItemDoneToggle}
                        onItemDelete={onItemDelete}
                    />
                );
            })}
        </ListStyled>
  );
};
