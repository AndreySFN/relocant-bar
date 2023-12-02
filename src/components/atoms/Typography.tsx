import styled from "styled-components";
import {CLR_BLACK} from "@src/constants";

export interface ITypographyProps {
    size?: number
    color?: string
    textAlign?: string
    padding?: string | number
    bold?: boolean
    italic?: boolean
}

export const Typography = styled.span<ITypographyProps>(
    //TODO: Разобраться с textAlign
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    ({padding, size, textAlign, color = CLR_BLACK, bold, italic}: ITypographyProps) => ({
        fontSize: size,
        color: color,
        padding: padding,
        textAlign: textAlign || 'start',
        fontWeight: bold && 'bold',
        fontStyle: italic && 'italic',
    })
);
