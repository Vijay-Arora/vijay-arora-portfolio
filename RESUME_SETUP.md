# Resume Download Setup

## Quick Setup

1. **Add your resume file to the `public` folder:**
   - Place your resume PDF file in the `public` directory
   - Name it `resume.pdf` (or update the filename in the code)

2. **File location:**
   ```
   public/resume.pdf
   ```

3. **Supported formats:**
   - PDF (recommended): `resume.pdf`
   - You can also use other formats like `.docx`, `.doc`, etc., but PDF is recommended for best compatibility

## Customizing the Download Filename

If you want to change the downloaded filename, update these files:

### Contact.tsx (line ~120)
```typescript
link.download = 'Your_Custom_Resume_Name.pdf';
```

### Header.tsx (line ~27)
```typescript
link.download = 'Your_Custom_Resume_Name.pdf';
```

## Alternative: Using a Different File Name

If your resume file has a different name (e.g., `my-resume.pdf`), update the `resumePath` in both components:

```typescript
const resumePath = '/my-resume.pdf';
```

## Testing

1. Make sure your resume file is in the `public` folder
2. Start your development server: `npm run dev`
3. Click the "Download Resume" or "Resume" button
4. The file should download automatically

## Production Deployment

When you deploy, make sure:
- The resume file is included in the `public` folder
- The file is accessible at the root path (e.g., `https://yoursite.com/resume.pdf`)
- The build process includes the public folder contents

## Notes

- The resume file will be publicly accessible at `/resume.pdf`
- If you want to keep it private, you'll need to implement authentication or use a backend endpoint to serve the file
- For better security, consider hosting the resume on a cloud storage service and updating the link

