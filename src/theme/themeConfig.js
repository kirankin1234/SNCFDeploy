// themeConfig.js
export const theme = {
    token: {
        fontFamily: "'Poppins', sans-serif",
        colorPrimary: '#1c276d',
        colorInfo: '#59cbe8',
        colorSuccess: '#5aa949',
        colorWarning: '#d54e91',
        colorError: '#a867aa',

        // Backgrounds
        colorBgContainer: '#ffffff',
        colorBgElevated: '#f5fbfd',
        colorBgLayout: '#e6f6fa',

        // Text
        colorText: '#1c276d',
        colorTextSecondary: '#5f6a8d',
        colorTextTertiary: '#8a94b3',

        // Borders
        colorBorder: '#dcebf1',
        colorBorderSecondary: '#bedeea',

        // Links and highlights
        colorHighlight: '#d54e91',
        colorLink: '#1c276d',

        borderRadius: 8,
        fontSize: 14,
        controlHeight: 36,
    },
    components: {
        Button: {
            colorPrimary: '#1c276d',
            colorPrimaryHover: '#1a245e',
            colorPrimaryActive: '#171f4f',
            algorithm: true,
        },
        Input: {
            colorPrimary: '#1c276d',
            colorBorder: '#bedeea',
            hoverBorderColor: '#59cbe8',
            borderRadius: 6,
        },
        Card: {
            colorBgContainer: '#ffffff',
            borderRadius: 10,
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
        },
        Table: {
            headerBg: '#f5fbfd',
            headerColor: '#1c276d',
            rowHoverBg: '#eaf6fc',
        },
        Menu: {
            itemHoverBg: '#eaf6fc',
            itemSelectedBg: '#dbeef9',
            itemSelectedColor: '#1c276d',
        },
    },
};

export default theme;