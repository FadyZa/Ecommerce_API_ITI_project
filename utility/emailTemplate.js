


export const emailTemplate=(email)=>{
    return `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Free HTML Email Template</title>
</head>

<body>
	<table width="650" style="background:#F5F5F5 url(https://learncodeweb.com/wp-content/uploads/2019/02/g-logo-mark-small.png) repeat; background-size:10%; border: 1px solid #ccc; padding:0px 30px; font-family:Arial;" cellspacing="0" cellpadding="0" border="0" align="center">
		<tbody>
			<tr>
				<td>&nbsp;</td>
			</tr>
			<tr>
				<td height="60">
					<table  width="560" align="center" cellspacing="0" cellpadding="0" border="0" style="table-layout:fixed;">
						<tbody>
							<tr>
								<td width="100%" align="center" style="background:#FFF; border:1px solid #ccc;">
									<a><img width="233" height="45" src="https://learncodeweb.com/wp-content/uploads/2019/01/logo.png" alt="LearnCodeWeb"></a>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
			<tr>
				<td>&nbsp;</td>
			</tr>
			<tr>
				<td>
					<table bgcolor="#FFFFFF" width="560" style="border:1px solid #ccc; padding:20px; opacity:0.8; font-family:Arial; font-size:14px; line-height:18px;" cellspacing="0" cellpadding="0" border="0" align="center">
						<tbody>
							<tr>
								<td>&nbsp;</td>
							</tr>
							<tr>
								<td>&nbsp;</td>
							</tr>
							<tr>
								<td align="center"><strong style="color:#55BDE8; font-size:3em; font-weight:bolder; text-align:center; margin:0px;">THANK YOU</strong><br /><br /></td>
							</tr>
							<tr>
								<td align="center"><span style="color:#000; font-size:2.2em; text-align:center; margin:0px;">for your subscription</span></td>
							</tr>
							<tr>
								<td>&nbsp;</td>
							</tr>
							<tr>
								<td>&nbsp;</td>
							</tr>
							<tr>
								<td style="color:#4da6e1; font-size: 25px; padding-bottom: 10px; border-bottom: 1px solid #000;">Dear UserName,</td>
							</tr>
							<tr>
								<td valign="top" align="left">
									<p style="color:#000; font-size: 29px; font-weight: normal; margin:15px 0px;">Thank you for</p>
									<p style="color:#000; font-size: 29px; font-weight: normal; margin:15px 0px;">signing up for the free</p>
									<p style="color:#50BBE7; font-size: 29px;font-weight: normal; margin:15px 0px;">LearnCodeWeb Newsletter.</p>
								</td>
							</tr>
							<tr>
								<td valign="top" align="left">
									<div>
										<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br>You can contact us any time by <a href="http://localhost:3000/verify/${email}" target=_blank style="color: #52a9ec">click here</a></p>
								</div></td>
							</tr>
							<tr>
								<td>&nbsp;</td>
							</tr>
							<tr>
								<td style="border-bottom:1px solid #000;">&nbsp;</td>
							</tr>
							
						</tbody>
					</table>
				</td>
			</tr>
			<tr>
				<td>&nbsp;</td>
			</tr>
		</tbody>
	</table>
</body>
</html>`
}