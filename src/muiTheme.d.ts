
declare module '@mui/material/styles' {
    interface Theme {
      status: {
        danger: React.CSSProperties['color'];
        neutral: React.CSSProperties['color']
      };
    }
  
  interface ThemeOptions {
      
      status: {
        danger: React.CSSProperties['color'];
        neutral: React.CSSProperties['color']
      };
    }
  
    interface Palette {
      neutral: Palette['primary'];
    }
  
    interface PaletteOptions {
      neutral: PaletteOptions['primary'];
    }
  
    interface PaletteColor {
      darker?: string;
      neutral?:string
    }
  
    interface SimplePaletteColorOptions {
      darker?: string;
      neutral?: string;
  }
  interface AppBarClasses{
    neutral?: string;
  }

  }
  